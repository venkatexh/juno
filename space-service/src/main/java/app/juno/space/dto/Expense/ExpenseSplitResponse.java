package app.juno.space.dto.Expense;

import java.util.UUID;

import app.juno.space.model.SplitType;

public record ExpenseSplitResponse(
        UUID id,
        UUID expenseId,
        UUID userId,
        Double amount,
        SplitType splitType) {

}
