package com.autheniq.controller;

import com.autheniq.model.Product;
import com.autheniq.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collections;
import java.util.Map;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:4200")
@RequiredArgsConstructor
public class ProductController {

  private final ProductService service;

  @PostMapping("/products/register")
  public Product register(@RequestBody Product p) {
    return service.register(p);
  }

  @GetMapping(value = "/products/{id}/qrcode", produces = MediaType.IMAGE_PNG_VALUE)
  public @ResponseBody byte[] qr(@PathVariable Long id) throws Exception {
    return service.qr(id);
  }

  @GetMapping("/verify")
  public Map<String, String> verify(@RequestParam String code) {
    return Collections.singletonMap("status", service.verify(code));
  }
}
