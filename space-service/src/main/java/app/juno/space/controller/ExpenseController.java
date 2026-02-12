package app.juno.space.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import app.juno.space.dto.Expense.ExpenseRequest;
import app.juno.space.dto.Expense.ExpenseResponse;
import app.juno.space.service.ExpenseService;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@RequestMapping("/api/modules/{moduleId}/expenses")
public class ExpenseController {

  @Autowired
  private ExpenseService expenseService;

  @GetMapping
  public List<ExpenseResponse> getExpenses(@PathVariable UUID moduleId) {
    return expenseService.getExpensesByModuleId(moduleId);
  }

  @PostMapping
  public ExpenseResponse createExpense(@RequestBody ExpenseRequest expenseRequest, @PathVariable UUID moduleId) {
    return expenseService.createExpense(expenseRequest, moduleId);
  }

}
