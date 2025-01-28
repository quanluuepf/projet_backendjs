/*
  Warnings:

  - You are about to drop the `Skill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `UserSkill` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `skillId` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Goal` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Goal` table. All the data in the column will be lost.
  - Added the required column `name` to the `Goal` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Skill_name_key";

-- DropIndex
DROP INDEX "User_email_key";

-- DropIndex
DROP INDEX "UserSkill_userId_skillId_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Skill";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "User";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "UserSkill";
PRAGMA foreign_keys=on;

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Goal" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "level" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Goal" ("createdAt", "description", "id", "level", "updatedAt") SELECT "createdAt", "description", "id", "level", "updatedAt" FROM "Goal";
DROP TABLE "Goal";
ALTER TABLE "new_Goal" RENAME TO "Goal";
CREATE UNIQUE INDEX "Goal_name_key" ON "Goal"("name");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
