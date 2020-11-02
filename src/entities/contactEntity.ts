/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {Field} from '../core/field';

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  mobile: string;
}

export class ContactDataManager {
  private static _sampleData: Array<Contact> = [
    {
      id: '1',
      firstName: 'Joe',
      lastName: 'Cocker',
      email: 'koo@koo.ru',
      address: 'Strings Ave.',
      phone: '+1 800 233-3344',
      mobile: '+1 800 233-3344',
    },
    {
      id: '2',
      firstName: 'Joe',
      lastName: 'Cocker',
      email: 'koo@koo.ru',
      address: 'Strings Ave.',
      phone: '+1 800 233-3344',
      mobile: '+1 800 233-3344',
    },
  ];

  static getSampleListData(dataMapper: Record<string, Field>): Contact[] {
    return ContactDataManager._sampleData;
  }

  static getSampleDetailsData(
    dataMapper: Record<string, Field>,
    id: string,
  ): Contact | undefined {
    for (let elm of ContactDataManager._sampleData) {
      if (elm.id === id) return elm;
    }
    return undefined;
  }
}
