import { TemplateRef } from "@angular/core";

export interface Tab {
  id: string;
  isActive: boolean;
  label: string;
  icon: TemplateRef<any> | null;
  disabled: boolean;
  direction: string;
}
