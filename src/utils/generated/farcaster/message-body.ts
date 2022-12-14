// @ts-nocheck
// automatically generated by the FlatBuffers compiler, do not modify

import { CastAddBody, CastAddBodyT } from '../farcaster/cast-add-body';
import { CastRemoveBody, CastRemoveBodyT } from '../farcaster/cast-remove-body';
import { FollowBody, FollowBodyT } from '../farcaster/follow-body';
import { ReactionBody, ReactionBodyT } from '../farcaster/reaction-body';
import { SignerBody, SignerBodyT } from '../farcaster/signer-body';
import {
  VerificationAddEthAddressBody,
  VerificationAddEthAddressBodyT,
} from '../farcaster/verification-add-eth-address-body';
import { VerificationRemoveBody, VerificationRemoveBodyT } from '../farcaster/verification-remove-body';

export enum MessageBody {
  NONE = 0,
  CastAddBody = 1,
  CastRemoveBody = 2,
  ReactionBody = 3,
  FollowBody = 4,
  VerificationAddEthAddressBody = 5,
  VerificationRemoveBody = 6,
  SignerBody = 7,
}

export function unionToMessageBody(
  type: MessageBody,
  accessor: (
    obj:
      | CastAddBody
      | CastRemoveBody
      | FollowBody
      | ReactionBody
      | SignerBody
      | VerificationAddEthAddressBody
      | VerificationRemoveBody
  ) =>
    | CastAddBody
    | CastRemoveBody
    | FollowBody
    | ReactionBody
    | SignerBody
    | VerificationAddEthAddressBody
    | VerificationRemoveBody
    | null
):
  | CastAddBody
  | CastRemoveBody
  | FollowBody
  | ReactionBody
  | SignerBody
  | VerificationAddEthAddressBody
  | VerificationRemoveBody
  | null {
  switch (MessageBody[type]) {
    case 'NONE':
      return null;
    case 'CastAddBody':
      return accessor(new CastAddBody())! as CastAddBody;
    case 'CastRemoveBody':
      return accessor(new CastRemoveBody())! as CastRemoveBody;
    case 'ReactionBody':
      return accessor(new ReactionBody())! as ReactionBody;
    case 'FollowBody':
      return accessor(new FollowBody())! as FollowBody;
    case 'VerificationAddEthAddressBody':
      return accessor(new VerificationAddEthAddressBody())! as VerificationAddEthAddressBody;
    case 'VerificationRemoveBody':
      return accessor(new VerificationRemoveBody())! as VerificationRemoveBody;
    case 'SignerBody':
      return accessor(new SignerBody())! as SignerBody;
    default:
      return null;
  }
}

export function unionListToMessageBody(
  type: MessageBody,
  accessor: (
    index: number,
    obj:
      | CastAddBody
      | CastRemoveBody
      | FollowBody
      | ReactionBody
      | SignerBody
      | VerificationAddEthAddressBody
      | VerificationRemoveBody
  ) =>
    | CastAddBody
    | CastRemoveBody
    | FollowBody
    | ReactionBody
    | SignerBody
    | VerificationAddEthAddressBody
    | VerificationRemoveBody
    | null,
  index: number
):
  | CastAddBody
  | CastRemoveBody
  | FollowBody
  | ReactionBody
  | SignerBody
  | VerificationAddEthAddressBody
  | VerificationRemoveBody
  | null {
  switch (MessageBody[type]) {
    case 'NONE':
      return null;
    case 'CastAddBody':
      return accessor(index, new CastAddBody())! as CastAddBody;
    case 'CastRemoveBody':
      return accessor(index, new CastRemoveBody())! as CastRemoveBody;
    case 'ReactionBody':
      return accessor(index, new ReactionBody())! as ReactionBody;
    case 'FollowBody':
      return accessor(index, new FollowBody())! as FollowBody;
    case 'VerificationAddEthAddressBody':
      return accessor(index, new VerificationAddEthAddressBody())! as VerificationAddEthAddressBody;
    case 'VerificationRemoveBody':
      return accessor(index, new VerificationRemoveBody())! as VerificationRemoveBody;
    case 'SignerBody':
      return accessor(index, new SignerBody())! as SignerBody;
    default:
      return null;
  }
}
