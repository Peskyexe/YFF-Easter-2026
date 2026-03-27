/*
  Warnings:

  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `date` on the `Order` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Order` table. All the data in the column will be lost.
  - Added the required column `cost` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `dates` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_date` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_address` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_email` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_name` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_phone` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_post_area` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_post_nbmr` to the `Order` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Order" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cost" INTEGER NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_address" TEXT NOT NULL,
    "user_post_nbmr" TEXT NOT NULL,
    "user_post_area" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,
    "order_date" TEXT NOT NULL,
    "dates" TEXT NOT NULL
);
INSERT INTO "new_Order" ("id") SELECT "id" FROM "Order";
DROP TABLE "Order";
ALTER TABLE "new_Order" RENAME TO "Order";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
