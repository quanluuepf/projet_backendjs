/*
  Warnings:

  - Made the column `difficulty` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `User` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `level` to the `UserSkill` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "difficulty" TEXT NOT NULL
);
INSERT INTO "new_User" ("difficulty", "email", "id", "name") SELECT "difficulty", "email", "id", "name" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
CREATE TABLE "new_UserSkill" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "userId" INTEGER NOT NULL,
    "skillId" INTEGER NOT NULL,
    "level" TEXT NOT NULL,
    CONSTRAINT "UserSkill_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "UserSkill_skillId_fkey" FOREIGN KEY ("skillId") REFERENCES "Skill" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_UserSkill" ("id", "skillId", "userId") SELECT "id", "skillId", "userId" FROM "UserSkill";
DROP TABLE "UserSkill";
ALTER TABLE "new_UserSkill" RENAME TO "UserSkill";
CREATE UNIQUE INDEX "UserSkill_userId_skillId_key" ON "UserSkill"("userId", "skillId");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
