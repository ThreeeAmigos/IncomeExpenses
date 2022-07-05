package com.threeAmigos.services.models;

import javax.persistence.*;

@Entity
@Table(name = "purpose")
public class Purpose {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "purpose_name")
    private String purposeName;

    public Purpose(String purposeName) {
        this.purposeName = purposeName;
    }

    public Purpose() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getPurposeName() {
        return purposeName;
    }

    public void setPurposeName(String purposeName) {
        this.purposeName = purposeName;
    }
}
