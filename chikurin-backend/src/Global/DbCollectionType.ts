/*
 * @Date: 2023-01-07 11:47:21
 * @LastEditors: Zireael 1193875164@qq.com
 * @LastEditTime: 2023-03-18 08:51:26
 * @FilePath: \A19\backend\src\Global\DbCollectionType.ts
 */

import { chikurin } from "../shared/entities/chikurin";
import { creditCard } from "../shared/entities/creditCard";
import { event } from "../shared/entities/event";
import { users } from "../shared/entities/user";

export interface DbCollectionType {
    users: users
    chikurin: chikurin
    creditCard: creditCard
    event:event
}
