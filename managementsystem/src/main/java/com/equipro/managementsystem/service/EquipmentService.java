package com.equipro.managementsystem.service;

import com.equipro.managementsystem.model.Equipment;

import java.util.List;

public interface EquipmentService {
    Equipment saveEquipment(Equipment equipment);
    List<Equipment> getAllEquipments();
    Equipment getEquipmentById(int id);
    void deleteEquipment(int id);
}