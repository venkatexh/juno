package app.juno.space.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import app.juno.space.dto.Expense.ExpenseRequest;
import app.juno.space.dto.Expense.ExpenseResponse;
import app.juno.space.dto.Expense.ExpenseSplitResponse;
import app.juno.space.model.Expense;
import app.juno.space.model.ExpenseSplit;
import app.juno.space.repository.ExpenseRepository;

@Service
public class ExpenseService {

  @Autowired
  private ExpenseRepository expenseRepository;

  public ExpenseResponse createExpense(ExpenseRequest expenseRequest, UUID spaceId) {
    // Validate input, create Expense and ExpenseSplit entities, save to database
    // Return ExpenseResponse DTO

    Expense expense = new Expense();

    expense.setTitle(expenseRequest.title());
    expense.setExpenseDate(expenseRequest.expenseDate());
    expense.setAmount(expenseRequest.amount());
    expense.setCurrency(expenseRequest.currency());
    expense.setAddedByUserId(expenseRequest.addedByUserId());
    expense.setPaidByUserId(expenseRequest.paidByUserId());
    expense.setSpaceId(spaceId);

    List<ExpenseSplit> splits = expenseRequest.splits().stream()
        .map(sr -> {
          ExpenseSplit s = new ExpenseSplit();
          s.setExpense(expense);
          s.setUserId(sr.userId());
          s.setAmount(sr.amount());
          s.setSplitType(sr.splitType());
          return s;
        })
        .toList();

    expense.getSplits().addAll(splits);

    Expense savedExpense = expenseRepository.save(expense);

    return mapToResponse(savedExpense);
  }

  private ExpenseResponse mapToResponse(Expense expense) {

    List<ExpenseSplitResponse> splits = expense.getSplits().stream()
        .map(split -> new ExpenseSplitResponse(split.getId(), split.getExpense().getId(), split.getUserId(),
            split.getAmount(),
            split.getSplitType()))
        .toList();

    ExpenseResponse response = new ExpenseResponse(expense.getId(), expense.getTitle(), expense.getExpenseDate(),
        expense.getAmount(), expense.getCurrency(), expense.getAddedByUserId(), expense.getPaidByUserId(), splits);

    return response;

  }

  public List<ExpenseResponse> getExpensesBySpaceId(UUID spaceId) {
    List<Expense> expenses = expenseRepository.findAll().stream()
        .filter(e -> e.getSpaceId().equals(spaceId))
        .toList();

    return expenses.stream()
        .map(this::mapToResponse)
        .toList();
  }
}
