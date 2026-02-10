package app.juno.space.dto.Expense;

import java.time.LocalDate;
import java.util.List;
import java.util.UUID;

public record ExpenseResponse(
    UUID id,
    String title,
    LocalDate expenseDate,
    Double amount,
    String currency,
    UUID addedByUserId,
    UUID paidByUserId,
    List<ExpenseSplitResponse> splits) {

}
