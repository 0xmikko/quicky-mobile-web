/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {EntityType} from './types';
import {ProjectDataManager} from '../entities/project';
import {ContactDataManager} from '../entities/contact';
import {EntityManager} from './entityManager';
import {EntityManagerI} from "./entityManagerI";

export class AppDataManager {
  protected static _managers: Map<EntityType, EntityManager<any>> = new Map<
    EntityType,
    EntityManager<any>
  >();

  static getManager(entityType: EntityType): EntityManagerI<any> {
    if (!AppDataManager._managers.has(entityType)) {
      AppDataManager._managers.set(
        entityType,
        AppDataManager.createNewManager(entityType),
      );
    }
    return AppDataManager._managers.get(entityType)!;
  }

  private static createNewManager(entityType: EntityType): EntityManager<any> {
    switch (entityType) {
      case 'Project':
        return new ProjectDataManager();
      case 'Contact':
        return new ContactDataManager();
      default:
        throw new Error("Entity type doesn't exist");
      // case 'Setting':
      //   return new SettingDataManager();
    }
  }
}
