type First<T extends any[]> = T extends [infer R, ...unknown[]] ? R : never;
