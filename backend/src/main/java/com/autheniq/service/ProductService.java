package com.autheniq.service;

import com.autheniq.model.Product;
import com.autheniq.model.ScanEvent;
import com.autheniq.repository.ProductRepository;
import com.autheniq.repository.ScanRepository;
import com.autheniq.util.QRGenerator;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository repo;
    private final ScanRepository scans;

    public Product register(Product p) {
        p.setCode(UUID.randomUUID().toString());
        return repo.save(p);
    }

    public byte[] qr(Long id) throws Exception {
        Product p = repo.findById(id).orElseThrow(() -> new java.util.NoSuchElementException("Product not found"));
        return QRGenerator.generate(p.getCode());
    }

    public String verify(String code) {
        Optional<Product> prod = repo.findByCode(code);
        if (!prod.isPresent()) {
            return "INVALID";
        }

        long count = scans.countByCode(code);
        scans.save(new ScanEvent(null, code, LocalDateTime.now()));
        return (count == 0) ? "VALID_FIRST_SCAN" : "ALREADY_VERIFIED";
    }
}
