package app.juno.space.dto.Expense;

import java.util.UUID;

import app.juno.space.model.SplitType;

public record ExpenseSplitRequest(
        UUID userId,
        Double amount,
        SplitType splitType) {
}
