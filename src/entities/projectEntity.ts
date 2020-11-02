/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {Field} from '../core/field';
import {isContain} from '../helpers/search';

export interface Project {
  id: string;
  name: string;
  status: string;
  priority: 'High' | 'Medium' | 'Low';
  projectCondition: 'Project overdue' | 'Task overdue' | 'On time' | 'Inactive';
  startDate: number;
  finishDate: number;
}

export class ProjectDataManager {
  private static _sampleData: Array<Project> = [
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

  static getSampleListData(dataMapper: Record<string, Field>): Project[] {
    return ProjectDataManager._sampleData;
  }

  static getSampleDetailsData(
    dataMapper: Record<string, Field>,
    id: string,
  ): Project | undefined {
    for (let elm of ProjectDataManager._sampleData) {
      if (elm.id === id) return elm;
    }
    return undefined;
  }

  static search(data: Project[], search: string): Project[] {
    return data.filter((d) => isContain(d.name, search));
  }
}
