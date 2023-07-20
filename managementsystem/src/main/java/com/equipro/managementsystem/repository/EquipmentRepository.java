package com.equipro.managementsystem.repository;
import com.equipro.managementsystem.model.Equipment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository
public interface EquipmentRepository extends JpaRepository<Equipment,Integer> {
    
}