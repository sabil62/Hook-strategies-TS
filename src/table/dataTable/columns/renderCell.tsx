import { Checkbox } from "@/components/ui/checkbox";
import { Currency } from "@/utils/formatter/number";
import { Optional } from "@/utils/optional";
import { CellContext } from "@tanstack/react-table";

import type { Optional as TOptional } from "@/types/utils";

export function renderCellCheckbox<T, V>({ getValue }: CellContext<T, V>) {
  return <Checkbox disabled checked={getValue<boolean>()} />;
}

export function renderCellCurrency<T, V>({ getValue }: CellContext<T, V>) {
  return Optional.from(getValue<TOptional<number>>())
    .map(Currency.format)
    .or("N/A");
}
