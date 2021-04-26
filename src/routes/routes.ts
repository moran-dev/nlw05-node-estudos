import { Router } from "express-router";
import { SettingsRepository } from "../repositories/SettingsRepository";
import { getCustomRepository } from "typeorm"

const routes = Router();

routes.post("/settings", async (req, res) => {
  const settingRepository = getCustomRepository(SettingsRepository);

  settingRepository.create({
    chat,
    username
  })

  await settingRepository.save(settings)
});

export { routes }
