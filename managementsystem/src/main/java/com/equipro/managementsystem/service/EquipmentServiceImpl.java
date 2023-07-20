package com.equipro.managementsystem.service;

import com.equipro.managementsystem.model.Equipment;
import com.equipro.managementsystem.repository.EquipmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class EquipmentServiceImpl implements EquipmentService {
    @Autowired
    private EquipmentRepository equipmentRepository;

    @Override
    public Equipment saveEquipment(Equipment equipment) {
        return equipmentRepository.save(equipment);
    }

    @Override
    public List<Equipment> getAllEquipments() {
        return equipmentRepository.findAll();
    }

    @Override
    public Equipment getEquipmentById(int id) {
        return equipmentRepository.findById(id).orElse(null);
    }
}