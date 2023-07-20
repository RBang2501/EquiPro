package com.equipro.managementsystem.service;

import com.equipro.managementsystem.model.Equipment;
import com.equipro.managementsystem.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EquipmentServiceImlpl implements EquipmentService {
    @Autowired
    private EquipmentRepository studentRepository;
}