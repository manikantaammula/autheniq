package com.autheniq.repository;

import com.autheniq.model.ScanEvent;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ScanRepository extends JpaRepository<ScanEvent, Long> {

    long countByCode(String code);
}
