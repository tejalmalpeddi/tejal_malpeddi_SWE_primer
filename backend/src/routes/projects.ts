
import { Router } from "express";
import * as projectsController from "../controllers/projects";

const router = Router();

// Check section 1-2 in the README for more details on how to create these routes.

// GET /projects/all - Get all projects
router.get("/all", projectsController.getAllProjects);

// GET /project/:id - Get project by ID
router.get("/:id", projectsController.getProjectById);

// POST /project - Create a new project
router.post("/", projectsController.createProject);

// PUT /project/:id - Update a project
router.put("/:id", projectsController.updateProject);

// DELETE /project/:id - Delete a project
router.delete("/:id", projectsController.deleteProject);

export default router;
