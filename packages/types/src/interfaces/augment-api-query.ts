// Auto-generated via `yarn polkadot-types-from-chain`, do not edit
/* eslint-disable */

import type { BTreeMap, Bytes, Option, Vec, bool, u16, u32, u8 } from '@polkadot/types';
import type { AnyNumber, ITuple, Observable } from '@polkadot/types/types';
import type { CurrencyId, CurrencyIdOf, ShareWeight, StorageVersion, TokenSymbol } from '@bifrost-finance/types/interfaces/aSharePrimitives';
import type { BancorPool } from '@bifrost-finance/types/interfaces/bancor';
import type { BlockNumberFor } from '@bifrost-finance/types/interfaces/chargeTransactionFee';
import type { IsExtended } from '@bifrost-finance/types/interfaces/minterReward';
import type { AssetBalance, TAssetBalance } from '@polkadot/types/interfaces/assets';
import type { AccountData, BalanceLock } from '@polkadot/types/interfaces/balances';
import type { Votes } from '@polkadot/types/interfaces/collective';
import type { FundInfo, TrieIndex } from '@polkadot/types/interfaces/crowdloan';
import type { ConfigData, OverweightIndex, PageCounter, PageIndexData } from '@polkadot/types/interfaces/cumulus';
import type { PreimageStatus, PropIndex, Proposal, ReferendumIndex, ReferendumInfo, Voting } from '@polkadot/types/interfaces/democracy';
import type { VoteThreshold } from '@polkadot/types/interfaces/elections';
import type { AbridgedHostConfiguration, MessageQueueChain, MessagingStateSnapshot, OutboundHrmpMessage, ParaId, PersistedValidationData, RelayBlockNumber, RelayChainBlockNumber, UpwardMessage } from '@polkadot/types/interfaces/parachains';
import type { AccountId, AccountIndex, AssetId, Balance, BalanceOf, BlockNumber, Hash, Moment, Permill, Releases, Weight } from '@polkadot/types/interfaces/runtime';
import type { Scheduled, TaskAddress } from '@polkadot/types/interfaces/scheduler';
import type { AccountInfo, ConsumedWeight, DigestOf, EventIndex, EventRecord, LastRuntimeUpgradeInfo, Phase } from '@polkadot/types/interfaces/system';
import type { Multiplier } from '@polkadot/types/interfaces/txpayment';
import type { InboundStatus, OutboundStatus, QueueConfigData, XcmpMessageFormat } from '@polkadot/types/interfaces/xcm';
import type { ApiTypes } from '@polkadot/api/types';

declare module '@polkadot/api/types/storage' {
  export interface AugmentedQueries<ApiType> {
    assets: {
      /**
       * The balance of a token type under an account.
       * 
       * NOTE: If the total is ever zero, decrease account ref account.
       * 
       * NOTE: This is only used in the case that this module is used to store
       * balances.
       **/
      accounts: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<AccountData>, [AccountId, CurrencyId]>;
      /**
       * Any liquidity locks of a token type under an account.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId, CurrencyId]>;
      /**
       * The total issuance of a token type.
       **/
      totalIssuance: AugmentedQuery<ApiType, (arg: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<TAssetBalance>, [CurrencyId]>;
    };
    balances: {
      /**
       * The balance of an account.
       * 
       * NOTE: This is only used in the case that this pallet is used to store balances.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountData>, [AccountId]>;
      /**
       * Any liquidity locks on some account balances.
       * NOTE: Should only be accessed when setting, changing and freeing a lock.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<BalanceLock>>, [AccountId]>;
      /**
       * Storage version of the pallet.
       * 
       * This is set to v2.0.0 for new networks.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
      /**
       * The total units issued in the system.
       **/
      totalIssuance: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    bancor: {
      bancorPools: AugmentedQuery<ApiType, (arg: CurrencyId | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<Option<BancorPool>>, [CurrencyId]>;
    };
    chargeTransactionFee: {
      defaultFeeChargeOrderList: AugmentedQuery<ApiType, () => Observable<Vec<CurrencyId>>, []>;
      userFeeChargeOrderList: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Vec<CurrencyId>>, [AccountId]>;
    };
    council: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]>;
    };
    democracy: {
      /**
       * A record of who vetoed what. Maps proposal hash to a possible existent block number
       * (until when it may not be resubmitted) and who vetoed it.
       **/
      blacklist: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<ITuple<[BlockNumber, Vec<AccountId>]>>>, [Hash]>;
      /**
       * Record of all proposals that have been subject to emergency cancellation.
       **/
      cancellations: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<bool>, [Hash]>;
      /**
       * Those who have locked a deposit.
       * 
       * TWOX-NOTE: Safe, as increasing integer keys are safe.
       **/
      depositOf: AugmentedQuery<ApiType, (arg: PropIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[Vec<AccountId>, BalanceOf]>>>, [PropIndex]>;
      /**
       * True if the last referendum tabled was submitted externally. False if it was a public
       * proposal.
       **/
      lastTabledWasExternal: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Accounts for which there are locks in action which may be removed at some point in the
       * future. The value is the block number at which the lock expires and may be removed.
       * 
       * TWOX-NOTE: OK ― `AccountId` is a secure hash.
       **/
      locks: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Option<BlockNumber>>, [AccountId]>;
      /**
       * The lowest referendum index representing an unbaked referendum. Equal to
       * `ReferendumCount` if there isn't a unbaked referendum.
       **/
      lowestUnbaked: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []>;
      /**
       * The referendum to be tabled whenever it would be valid to table an external proposal.
       * This happens when a referendum needs to be tabled and one of two conditions are met:
       * - `LastTabledWasExternal` is `false`; or
       * - `PublicProps` is empty.
       **/
      nextExternal: AugmentedQuery<ApiType, () => Observable<Option<ITuple<[Hash, VoteThreshold]>>>, []>;
      /**
       * Map of hashes to the proposal preimage, along with who registered it and their deposit.
       * The block number is the block at which it was deposited.
       **/
      preimages: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<PreimageStatus>>, [Hash]>;
      /**
       * The number of (public) proposals that have been made so far.
       **/
      publicPropCount: AugmentedQuery<ApiType, () => Observable<PropIndex>, []>;
      /**
       * The public proposals. Unsorted. The second item is the proposal's hash.
       **/
      publicProps: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[PropIndex, Hash, AccountId]>>>, []>;
      /**
       * The next free referendum index, aka the number of referenda started so far.
       **/
      referendumCount: AugmentedQuery<ApiType, () => Observable<ReferendumIndex>, []>;
      /**
       * Information concerning any given referendum.
       * 
       * TWOX-NOTE: SAFE as indexes are not under an attacker’s control.
       **/
      referendumInfoOf: AugmentedQuery<ApiType, (arg: ReferendumIndex | AnyNumber | Uint8Array) => Observable<Option<ReferendumInfo>>, [ReferendumIndex]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Option<Releases>>, []>;
      /**
       * All votes for a particular voter. We store the balance for the number of votes that we
       * have recorded. The second item is the total amount of delegations, that will be added.
       * 
       * TWOX-NOTE: SAFE as `AccountId`s are crypto hashes anyway.
       **/
      votingOf: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Voting>, [AccountId]>;
    };
    dmpQueue: {
      /**
       * The configuration.
       **/
      configuration: AugmentedQuery<ApiType, () => Observable<ConfigData>, []>;
      /**
       * The overweight messages.
       **/
      overweight: AugmentedQuery<ApiType, (arg: OverweightIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[RelayBlockNumber, Bytes]>>>, [OverweightIndex]>;
      /**
       * The page index.
       **/
      pageIndex: AugmentedQuery<ApiType, () => Observable<PageIndexData>, []>;
      /**
       * The queue pages.
       **/
      pages: AugmentedQuery<ApiType, (arg: PageCounter | AnyNumber | Uint8Array) => Observable<Vec<ITuple<[RelayBlockNumber, Bytes]>>>, [PageCounter]>;
    };
    indices: {
      /**
       * The lookup from index to account.
       **/
      accounts: AugmentedQuery<ApiType, (arg: AccountIndex | AnyNumber | Uint8Array) => Observable<Option<ITuple<[AccountId, BalanceOf, bool]>>>, [AccountIndex]>;
    };
    minterReward: {
      /**
       * How much BNC will be issued to minters each block after.
       **/
      bncRewardByOneBlock: AugmentedQuery<ApiType, () => Observable<BalanceOf>, []>;
      /**
       * Record maximum vtoken value is minted and when minted
       **/
      currentRound: AugmentedQuery<ApiType, () => Observable<u8>, []>;
      /**
       * Ieally, BNC reward will be issued after each 50 blocks.
       **/
      currentRoundStartAt: AugmentedQuery<ApiType, () => Observable<BlockNumberFor>, []>;
      /**
       * Record maximum vtoken value is minted and when minted
       **/
      maximumVtokenMinted: AugmentedQuery<ApiType, () => Observable<ITuple<[BlockNumberFor, BalanceOf, CurrencyIdOf, IsExtended]>>, []>;
      /**
       * Who mints vtoken
       **/
      minter: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<BalanceOf>, [AccountId, CurrencyIdOf]>;
      /**
       * Current storage version
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<StorageVersion>, []>;
      totalVtokenMinted: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<BalanceOf>, [CurrencyIdOf]>;
      /**
       * Record a user how much bnc s/he reveives.
       **/
      userBncReward: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<BalanceOf>, [AccountId]>;
      weights: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<ShareWeight>, [CurrencyIdOf]>;
    };
    parachainInfo: {
      parachainId: AugmentedQuery<ApiType, () => Observable<ParaId>, []>;
    };
    parachainSystem: {
      /**
       * The number of HRMP messages we observed in `on_initialize` and thus used that number for
       * announcing the weight of `on_initialize` and `on_finalize`.
       **/
      announcedHrmpMessagesPerCandidate: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The next authorized upgrade, if there is one.
       **/
      authorizedUpgrade: AugmentedQuery<ApiType, () => Observable<Option<Hash>>, []>;
      /**
       * Were the validation data set to notify the relay chain?
       **/
      didSetValidationCode: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * The parachain host configuration that was obtained from the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      hostConfiguration: AugmentedQuery<ApiType, () => Observable<Option<AbridgedHostConfiguration>>, []>;
      /**
       * HRMP messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpOutboundMessages: AugmentedQuery<ApiType, () => Observable<Vec<OutboundHrmpMessage>>, []>;
      /**
       * HRMP watermark that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      hrmpWatermark: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * The last downward message queue chain head we have observed.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastDmqMqcHead: AugmentedQuery<ApiType, () => Observable<MessageQueueChain>, []>;
      /**
       * The message queue chain heads we have observed per each channel incoming channel.
       * 
       * This value is loaded before and saved after processing inbound downward messages carried
       * by the system inherent.
       **/
      lastHrmpMqcHeads: AugmentedQuery<ApiType, () => Observable<BTreeMap<ParaId, MessageQueueChain>>, []>;
      /**
       * The last relay parent block number at which we signalled the code upgrade.
       **/
      lastUpgrade: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * New validation code that was set in a block.
       * 
       * This will be cleared in `on_initialize` of each new block if no other pallet already set
       * the value.
       **/
      newValidationCode: AugmentedQuery<ApiType, () => Observable<Option<Bytes>>, []>;
      /**
       * We need to store the new validation function for the span between
       * setting it and applying it. If it has a
       * value, then [`PendingValidationCode`] must have a real value, and
       * together will coordinate the block number where the upgrade will happen.
       **/
      pendingRelayChainBlockNumber: AugmentedQuery<ApiType, () => Observable<Option<RelayChainBlockNumber>>, []>;
      /**
       * Upward messages that are still pending and not yet send to the relay chain.
       **/
      pendingUpwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<UpwardMessage>>, []>;
      /**
       * The new validation function we will upgrade to when the relay chain
       * reaches [`PendingRelayChainBlockNumber`]. A real validation function must
       * exist here as long as [`PendingRelayChainBlockNumber`] is set.
       **/
      pendingValidationCode: AugmentedQuery<ApiType, () => Observable<Bytes>, []>;
      /**
       * Number of downward messages processed in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      processedDownwardMessages: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * The snapshot of some state related to messaging relevant to the current parachain as per
       * the relay parent.
       * 
       * This field is meant to be updated each block with the validation data inherent. Therefore,
       * before processing of the inherent, e.g. in `on_initialize` this data may be stale.
       * 
       * This data is also absent from the genesis.
       **/
      relevantMessagingState: AugmentedQuery<ApiType, () => Observable<Option<MessagingStateSnapshot>>, []>;
      /**
       * The weight we reserve at the beginning of the block for processing DMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedDmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<Weight>>, []>;
      /**
       * The weight we reserve at the beginning of the block for processing XCMP messages. This
       * overrides the amount set in the Config trait.
       **/
      reservedXcmpWeightOverride: AugmentedQuery<ApiType, () => Observable<Option<Weight>>, []>;
      /**
       * Upward messages that were sent in a block.
       * 
       * This will be cleared in `on_initialize` of each new block.
       **/
      upwardMessages: AugmentedQuery<ApiType, () => Observable<Vec<UpwardMessage>>, []>;
      /**
       * The [`PersistedValidationData`] set for this block.
       **/
      validationData: AugmentedQuery<ApiType, () => Observable<Option<PersistedValidationData>>, []>;
    };
    randomnessCollectiveFlip: {
      /**
       * Series of block headers from the last 81 blocks that acts as random seed material. This
       * is arranged as a ring buffer with `block_number % 81` being the index into the `Vec` of
       * the oldest hash.
       **/
      randomMaterial: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
    };
    salp: {
      /**
       * Info on all of the funds.
       **/
      funds: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Option<FundInfo>>, [ParaId]>;
      /**
       * Tracker for the next available trie index
       **/
      nextTrieIndex: AugmentedQuery<ApiType, () => Observable<TrieIndex>, []>;
      validators: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<bool>, [AccountId]>;
    };
    scheduler: {
      /**
       * Items to be executed, indexed by the block number that they should be executed on.
       **/
      agenda: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Vec<Option<Scheduled>>>, [BlockNumber]>;
      /**
       * Lookup from identity to the block number and index of the task.
       **/
      lookup: AugmentedQuery<ApiType, (arg: Bytes | string | Uint8Array) => Observable<Option<TaskAddress>>, [Bytes]>;
      /**
       * Storage version of the pallet.
       * 
       * New networks start with last version.
       **/
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    sudo: {
      /**
       * The `AccountId` of the sudo key.
       **/
      key: AugmentedQuery<ApiType, () => Observable<AccountId>, []>;
    };
    system: {
      /**
       * The full account information for a particular account ID.
       **/
      account: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<AccountInfo>, [AccountId]>;
      /**
       * Total length (in bytes) for all extrinsics put together, for the current block.
       **/
      allExtrinsicsLen: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Map of block numbers to block hashes.
       **/
      blockHash: AugmentedQuery<ApiType, (arg: BlockNumber | AnyNumber | Uint8Array) => Observable<Hash>, [BlockNumber]>;
      /**
       * The current weight for the block.
       **/
      blockWeight: AugmentedQuery<ApiType, () => Observable<ConsumedWeight>, []>;
      /**
       * Digest of the current block, also part of the block header.
       **/
      digest: AugmentedQuery<ApiType, () => Observable<DigestOf>, []>;
      /**
       * The number of events in the `Events<T>` list.
       **/
      eventCount: AugmentedQuery<ApiType, () => Observable<EventIndex>, []>;
      /**
       * Events deposited for the current block.
       **/
      events: AugmentedQuery<ApiType, () => Observable<Vec<EventRecord>>, []>;
      /**
       * Mapping between a topic (represented by T::Hash) and a vector of indexes
       * of events in the `<Events<T>>` list.
       * 
       * All topic vectors have deterministic storage locations depending on the topic. This
       * allows light-clients to leverage the changes trie storage tracking mechanism and
       * in case of changes fetch the list of events of interest.
       * 
       * The value has the type `(T::BlockNumber, EventIndex)` because if we used only just
       * the `EventIndex` then in case if the topic has the same contents on the next block
       * no notification will be triggered thus the event might be lost.
       **/
      eventTopics: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, EventIndex]>>>, [Hash]>;
      /**
       * The execution phase of the block.
       **/
      executionPhase: AugmentedQuery<ApiType, () => Observable<Option<Phase>>, []>;
      /**
       * Total extrinsics count for the current block.
       **/
      extrinsicCount: AugmentedQuery<ApiType, () => Observable<Option<u32>>, []>;
      /**
       * Extrinsics data for the current block (maps an extrinsic's index to its data).
       **/
      extrinsicData: AugmentedQuery<ApiType, (arg: u32 | AnyNumber | Uint8Array) => Observable<Bytes>, [u32]>;
      /**
       * Stores the `spec_version` and `spec_name` of when the last runtime upgrade happened.
       **/
      lastRuntimeUpgrade: AugmentedQuery<ApiType, () => Observable<Option<LastRuntimeUpgradeInfo>>, []>;
      /**
       * The current block number being processed. Set by `execute_block`.
       **/
      number: AugmentedQuery<ApiType, () => Observable<BlockNumber>, []>;
      /**
       * Hash of the previous block.
       **/
      parentHash: AugmentedQuery<ApiType, () => Observable<Hash>, []>;
      /**
       * True if we have upgraded so that AccountInfo contains three types of `RefCount`. False
       * (default) if not.
       **/
      upgradedToTripleRefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * True if we have upgraded so that `type RefCount` is `u32`. False (default) if not.
       **/
      upgradedToU32RefCount: AugmentedQuery<ApiType, () => Observable<bool>, []>;
    };
    technicalCommittee: {
      /**
       * The current members of the collective. This is stored sorted (just by value).
       **/
      members: AugmentedQuery<ApiType, () => Observable<Vec<AccountId>>, []>;
      /**
       * The prime member that helps determine the default vote behavior in case of absentations.
       **/
      prime: AugmentedQuery<ApiType, () => Observable<Option<AccountId>>, []>;
      /**
       * Proposals so far.
       **/
      proposalCount: AugmentedQuery<ApiType, () => Observable<u32>, []>;
      /**
       * Actual proposal for a given hash, if it's current.
       **/
      proposalOf: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Proposal>>, [Hash]>;
      /**
       * The hashes of the active proposals.
       **/
      proposals: AugmentedQuery<ApiType, () => Observable<Vec<Hash>>, []>;
      /**
       * Votes on a given proposal, if it is ongoing.
       **/
      voting: AugmentedQuery<ApiType, (arg: Hash | string | Uint8Array) => Observable<Option<Votes>>, [Hash]>;
    };
    timestamp: {
      /**
       * Did the timestamp get updated in this block?
       **/
      didUpdate: AugmentedQuery<ApiType, () => Observable<bool>, []>;
      /**
       * Current time for the current block.
       **/
      now: AugmentedQuery<ApiType, () => Observable<Moment>, []>;
    };
    transactionPayment: {
      nextFeeMultiplier: AugmentedQuery<ApiType, () => Observable<Multiplier>, []>;
      storageVersion: AugmentedQuery<ApiType, () => Observable<Releases>, []>;
    };
    voucher: {
      /**
       * How much voucher you have
       **/
      balancesVoucher: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<Balance>, [AccountId]>;
      /**
       * Current remaining BNC adds all others vouchers, equaling to TotalSuppliedBNC
       **/
      remainingBnc: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
      /**
       * Total BNC in mainnet
       **/
      totalSuppliedBnc: AugmentedQuery<ApiType, () => Observable<Balance>, []>;
    };
    vtokenMint: {
      /**
       * Referer channels for all users.
       **/
      allReferrerChannels: AugmentedQuery<ApiType, () => Observable<ITuple<[BTreeMap<AccountId, BalanceOf>, BalanceOf]>>, []>;
      /**
       * Total mint pool
       **/
      mintPool: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<BalanceOf>, [CurrencyIdOf]>;
      /**
       * The ROI of each token by every block.
       **/
      rateOfInterestEachBlock: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<BalanceOf>, [CurrencyIdOf]>;
      /**
       * Record when and how much balance user want to redeem.
       **/
      redeemRecord: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<Vec<ITuple<[BlockNumber, BalanceOf]>>>, [AccountId, CurrencyIdOf]>;
      /**
       * Collect referrer, minter => ([(referrer1, 1000), (referrer2, 2000), ...], total_point)
       * total_point = 1000 + 2000 + ...
       * referrer must be unique, so check it unique while a new referrer incoming.
       * and insert the new channel to the
       **/
      referrerChannels: AugmentedQuery<ApiType, (arg: AccountId | string | Uint8Array) => Observable<ITuple<[Vec<ITuple<[AccountId, BalanceOf]>>, BalanceOf]>>, [AccountId]>;
      /**
       * List lock period while staking.
       **/
      stakingLockPeriod: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<BlockNumber>, [CurrencyIdOf]>;
      /**
       * List user staking revenue.
       **/
      userStakingRevenue: AugmentedQuery<ApiType, (arg1: AccountId | string | Uint8Array, arg2: TokenSymbol | 'ASG' | 'aUSD' | 'DOT' | 'KSM' | 'ETH' | number | Uint8Array) => Observable<BalanceOf>, [AccountId, TokenSymbol]>;
      /**
       * Yeild rate for each token
       **/
      yieldRate: AugmentedQuery<ApiType, (arg: CurrencyIdOf | { Token: any } | { VToken: any } | { Native: any } | { Stable: any } | { VSToken: any } | { VSBond: any } | string | Uint8Array) => Observable<Permill>, [CurrencyIdOf]>;
    };
    xcmpQueue: {
      /**
       * Inbound aggregate XCMP messages. It can only be one per ParaId/block.
       **/
      inboundXcmpMessages: AugmentedQuery<ApiType, (arg1: ParaId | AnyNumber | Uint8Array, arg2: RelayBlockNumber | AnyNumber | Uint8Array) => Observable<Bytes>, [ParaId, RelayBlockNumber]>;
      /**
       * Status of the inbound XCMP channels.
       **/
      inboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ParaId, InboundStatus, Vec<ITuple<[RelayBlockNumber, XcmpMessageFormat]>>]>>>, []>;
      /**
       * The messages outbound in a given XCMP channel.
       **/
      outboundXcmpMessages: AugmentedQuery<ApiType, (arg1: ParaId | AnyNumber | Uint8Array, arg2: u16 | AnyNumber | Uint8Array) => Observable<Bytes>, [ParaId, u16]>;
      /**
       * The non-empty XCMP channels in order of becoming non-empty, and the index of the first
       * and last outbound message. If the two indices are equal, then it indicates an empty
       * queue and there must be a non-`Ok` `OutboundStatus`. We assume queues grow no greater
       * than 65535 items. Queue indices for normal messages begin at one; zero is reserved in
       * case of the need to send a high-priority signal message this block.
       * The bool is true if there is a signal message waiting to be sent.
       **/
      outboundXcmpStatus: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[ParaId, OutboundStatus, bool, u16, u16]>>>, []>;
      /**
       * The configuration which controls the dynamics of the outbound queue.
       **/
      queueConfig: AugmentedQuery<ApiType, () => Observable<QueueConfigData>, []>;
      /**
       * Any signal messages waiting to be sent.
       **/
      signalMessages: AugmentedQuery<ApiType, (arg: ParaId | AnyNumber | Uint8Array) => Observable<Bytes>, [ParaId]>;
    };
    zenlinkProtocol: {
      /**
       * Foreign foreign storage
       * The number of units of assets held by any given account.
       **/
      foreignLedger: AugmentedQuery<ApiType, (arg: ITuple<[AssetId, AccountId]> | [AssetId | { chain_id?: any; asset_type?: any; asset_index?: any } | string | Uint8Array, AccountId | string | Uint8Array]) => Observable<AssetBalance>, [ITuple<[AssetId, AccountId]>]>;
      foreignList: AugmentedQuery<ApiType, () => Observable<Vec<AssetId>>, []>;
      /**
       * TWOX-NOTE: `AssetId` is trusted, so this is safe.
       **/
      foreignMeta: AugmentedQuery<ApiType, (arg: AssetId | { chain_id?: any; asset_type?: any; asset_index?: any } | string | Uint8Array) => Observable<AssetBalance>, [AssetId]>;
      /**
       * ((AssetId, AssetId), AccountId) -> AssetBalance
       **/
      liquidityLedger: AugmentedQuery<ApiType, (arg: ITuple<[ITuple<[AssetId, AssetId]>, AccountId]> | [ITuple<[AssetId, AssetId]> | [AssetId | { chain_id?: any; asset_type?: any; asset_index?: any } | string | Uint8Array, AssetId | { chain_id?: any; asset_type?: any; asset_index?: any } | string | Uint8Array], AccountId | string | Uint8Array]) => Observable<AssetBalance>, [ITuple<[ITuple<[AssetId, AssetId]>, AccountId]>]>;
      /**
       * Swap liquidity storage
       * TWOX-NOTE: `AssetId` is trusted, so this is safe.
       * (AssetId, AssetId) -> (PairAccountId, TotalSupply)
       **/
      liquidityMeta: AugmentedQuery<ApiType, (arg: ITuple<[AssetId, AssetId]> | [AssetId | { chain_id?: any; asset_type?: any; asset_index?: any } | string | Uint8Array, AssetId | { chain_id?: any; asset_type?: any; asset_index?: any } | string | Uint8Array]) => Observable<Option<ITuple<[AccountId, AssetBalance]>>>, [ITuple<[AssetId, AssetId]>]>;
      liquidityPairs: AugmentedQuery<ApiType, () => Observable<Vec<ITuple<[AssetId, AssetId]>>>, []>;
    };
  }

  export interface QueryableStorage<ApiType extends ApiTypes> extends AugmentedQueries<ApiType> {
  }
}
