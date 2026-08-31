package com.fairytale;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;
import software.amazon.awssdk.services.s3.S3Client;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;

import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.HashMap;
import java.util.Map;

public class App implements RequestHandler<Map<String, Object>, Map<String, Object>> {

    private static final String CONTENT_BUCKET = "storyless-kingdom-tales-content";
    private final S3Client s3 = S3Client.create();

    @Override
    public Map<String, Object> handleRequest(Map<String, Object> event, Context context) {
        // Lambda Function URLs put the requested path here, e.g. "/chapters/1"
        String rawPath = String.valueOf(event.get("rawPath"));
        String chapterNumber = rawPath.replace("/chapters/", "");

        try {
            String key = "chapters/chapter-" + chapterNumber + ".json";
            InputStream objectData = s3.getObject(GetObjectRequest.builder()
                    .bucket(CONTENT_BUCKET)
                    .key(key)
                    .build());
            String json = new String(objectData.readAllBytes(), StandardCharsets.UTF_8);
            return response(200, json);
        } catch (Exception e) {
            context.getLogger().log("Failed to load chapter " + chapterNumber + ": " + e.getMessage());
            return response(404, "{\"error\": \"Chapter not found\"}");
        }
    }

    private Map<String, Object> response(int statusCode, String body) {
        Map<String, Object> response = new HashMap<>();
        response.put("statusCode", statusCode);
        response.put("headers", Map.of("Content-Type", "application/json"));
        response.put("body", body);
        return response;
    }
}