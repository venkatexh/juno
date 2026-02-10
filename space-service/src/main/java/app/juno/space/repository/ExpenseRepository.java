package app.juno.space.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import app.juno.space.model.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, UUID> {

}
