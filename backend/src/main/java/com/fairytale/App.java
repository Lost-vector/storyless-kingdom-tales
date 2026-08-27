package com.fairytale;

import com.amazonaws.services.lambda.runtime.Context;
import com.amazonaws.services.lambda.runtime.RequestHandler;

import java.util.HashMap;
import java.util.Map;

/**
 * Entry point Lambda invokes directly - no servlet container, no framework.
 * Handler value configured in AWS: com.fairytale.App::handleRequest
 */
public class App implements RequestHandler<Map<String, Object>, Map<String, Object>> {

    @Override
    public Map<String, Object> handleRequest(Map<String, Object> event, Context context) {
        Map<String, Object> response = new HashMap<>();
        response.put("statusCode", 200);
        response.put("headers", Map.of("Content-Type", "application/json"));
        response.put("body", "{\"message\": \"Backend placeholder - pipeline test only.\"}");
        return response;
    }
}