/*
 * Copyright (c) 2020, Mikael Lazarev
 */

import {CHATS_PREFIX} from './index';
import {Chat} from '../../core/chat';
import {Message} from '../../core/message';
import {DataItem, DETAIL_FAILURE, DETAIL_SUCCESS} from 'redux-data-connect';
import {DataLoaderDetailsActions} from 'redux-data-connect/lib/dataloader';

export type DataLoaderDetailsState<Chat> = {
  data: Record<string, DataItem<Chat>>;
  hashes: Record<string, DataItem<Chat>>;
};

export function createChatDataLoaderDetailsReducer() {
  const initialState: DataLoaderDetailsState<Chat> = {
    data: {},
    hashes: {},
  };

  const updateDetailState = (
    state: DataLoaderDetailsState<Chat>,
    id: string,
    hash: string,
    newData: DataItem<Chat>,
  ): DataLoaderDetailsState<Chat> => ({
    ...state,
    data: {
      ...state.data,
      [id]: newData,
    },
    hashes: {
      ...state.hashes,
      [hash]: newData,
    },
  });

  return function (
    state: DataLoaderDetailsState<Chat> = initialState,
    action: DataLoaderDetailsActions<Chat>,
  ): DataLoaderDetailsState<Chat> {
    let id = action?.payload?.id;
    if (id === undefined) {
      id = '-';
    }

    id = id.toUpperCase();

    switch (action.type) {
      case CHATS_PREFIX + DETAIL_SUCCESS:
        const existingChat = state.data[id];
        let messages = new Map<string, Message>();

        if (existingChat !== undefined && existingChat.data !== undefined) {
          existingChat.data.messages
            .map((e) => e)
            .filter((msg) => msg.pending)
            .forEach((msg) => {
              messages.set(msg.id, msg);
            });
        }
        console.log('REDUCER!!! MESSAGE-3S', messages);
        console.log('REDUCER!!!');
        console.log('REDUCER!!! T-P', action.type);
        console.log('REDUCER!!! P-L', action.payload);


        action.payload?.messages.forEach((msg) => messages.set(msg.id, msg));
        console.log('REDUCER!!! MESSAGES', messages);

        return updateDetailState(state, id, '0', {
          data:
            action.payload === undefined
              ? undefined
              : {
                  ...action.payload,
                  messages: Array.from(messages.values()),
                },
          status: 'STATUS.SUCCESS',
        });

      case CHATS_PREFIX + 'PENDING_MESSAGE':
        console.log('PNNNNND', action);
        const existingChat2 = state.data[id];
        if (
          existingChat2 === undefined ||
          existingChat2.data === undefined ||
          action.payload === undefined
        ) {
          return state;
        }
        console.log('PNNNNND-2', action);
        return updateDetailState(state, id, '0', {
          data: {
            ...existingChat2.data,
            messages: [
              ...existingChat2.data.messages,
              ...action.payload.messages,
            ],
          },
          status: 'STATUS.SUCCESS',
        });

      case CHATS_PREFIX + DETAIL_FAILURE:
        return updateDetailState(state, id, '0', {
          data: undefined,
          status: 'STATUS.FAILURE',
        });

      default:
        return state;
    }
  };
}
