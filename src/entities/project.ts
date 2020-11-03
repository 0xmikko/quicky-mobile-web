/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {isContain} from '../helpers/search';
import {EntityManager} from '../core/entityManager';
import {ProjectListItem} from "../screens/Projects/ProjectsListItem";
import {ProjectDetailsView} from "../screens/Projects/ProjectDetailsView";

export interface Project {
  id: string;
  name: string;
  status: string;
  priority: 'High' | 'Medium' | 'Low';
  projectCondition: 'Project overdue' | 'Task overdue' | 'On time' | 'Inactive';
  startDate: number;
  finishDate: number;
}

export class ProjectDataManager extends EntityManager<Project> {
  constructor() {
    super('Project', ProjectListItem, ProjectDetailsView);
    this._sampleData = [
      {
        id: 'P1',
        name: 'QB Hackathon',
        status: 'In progress',
        priority: 'High',
        projectCondition: 'On time',
        startDate: Date.parse('21-09-2020'),
        finishDate: Date.parse('16-11-2020'),
      },
      {
        id: 'P2',
        name: 'QB Hackathon',
        status: 'In progress',
        priority: 'High',
        projectCondition: 'On time',
        startDate: Date.parse('21-09-2020'),
        finishDate: Date.parse('16-11-2020'),
      },
    ];
  }

  search(data: Project[], search: string): Project[] {
    return data.filter((d) => isContain(d.name, search));
  }
}
