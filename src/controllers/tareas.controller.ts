import { Request, Response } from 'express';

const tareas = [
  { id: 1, titulo: "Estudiar pruebas", completada: false },
  { id: 2, titulo: "Hacer ejercicio", completada: true },
];

export function obtenerTareas(req: Request, res: Response) {
  res.json(tareas);
}