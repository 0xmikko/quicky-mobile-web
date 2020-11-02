/*
 * Copyright (c) 2020, Mikael Lazarev
 */

export interface Profile {
  id: string;
  name: string;
  avatar?: string;
  qbToken?: string;
}

export interface ProfileChangeNameDTO extends Record<string, string> {
  name: string;
}
