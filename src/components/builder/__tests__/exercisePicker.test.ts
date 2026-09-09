import { describe, expect, it } from "vitest";
import { filterExercises } from "../exercisePicker";
import type { Exercise } from "../../../lib/storage";

const exercise = (overrides: Partial<Exercise>): Exercise => ({
  id: overrides.id ?? "exercise",
  name: overrides.name ?? "Exercise",
  muscle: overrides.muscle ?? "Pectoraux",
  category: overrides.category ?? "Force",
  favorite: overrides.favorite ?? false,
  createdAt: overrides.createdAt ?? "2026-01-01T00:00:00.000Z",
});

describe("filterExercises", () => {
  it("filters by search and excludes exercises already in the session", () => {
    const result = filterExercises(
      [
        exercise({ id: "bench", name: "Développé couché", favorite: true }),
        exercise({ id: "row", name: "Rowing barre", muscle: "Dos" }),
      ],
      new Set(["bench"]),
      "développé",
    );

    expect(result).toEqual([]);
  });

  it("filters by muscle while keeping favorite exercises first", () => {
    const result = filterExercises(
      [
        exercise({ id: "row", name: "Rowing barre", muscle: "Dos" }),
        exercise({ id: "pull", name: "Tractions", muscle: "Dos", favorite: true }),
        exercise({ id: "squat", name: "Squat", muscle: "Jambes" }),
      ],
      new Set(),
      "",
      "Dos",
    );

    expect(result.map((item) => item.id)).toEqual(["pull", "row"]);
  });

  it("matches search case-insensitively and sorts alphabetically", () => {
    const result = filterExercises(
      [
        exercise({ id: "z", name: "Z-Press" }),
        exercise({ id: "a", name: "Arnold press" }),
      ],
      new Set(),
      "PRESS",
    );

    expect(result.map((item) => item.id)).toEqual(["a", "z"]);
  });
});
