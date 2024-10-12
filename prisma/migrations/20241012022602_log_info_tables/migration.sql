/*
  Warnings:

  - You are about to drop the `Spaceship` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `updatedAt` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `planets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `star_systems` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "Spaceship";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "spaceships" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "manufacturer" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "spaceships_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "characters" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_characters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "afiliation" TEXT NOT NULL,
    "homePlanetId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "characters_homePlanetId_fkey" FOREIGN KEY ("homePlanetId") REFERENCES "planets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_characters" ("afiliation", "homePlanetId", "id", "name", "specie") SELECT "afiliation", "homePlanetId", "id", "name", "specie" FROM "characters";
DROP TABLE "characters";
ALTER TABLE "new_characters" RENAME TO "characters";
CREATE INDEX "characters_id_homePlanetId_idx" ON "characters"("id", "homePlanetId");
CREATE TABLE "new_planets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "starSystemId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "planets_starSystemId_fkey" FOREIGN KEY ("starSystemId") REFERENCES "star_systems" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_planets" ("climate", "id", "name", "population", "starSystemId", "terrain") SELECT "climate", "id", "name", "population", "starSystemId", "terrain" FROM "planets";
DROP TABLE "planets";
ALTER TABLE "new_planets" RENAME TO "planets";
CREATE INDEX "planets_id_starSystemId_idx" ON "planets"("id", "starSystemId");
CREATE TABLE "new_star_systems" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_star_systems" ("description", "id", "name") SELECT "description", "id", "name" FROM "star_systems";
DROP TABLE "star_systems";
ALTER TABLE "new_star_systems" RENAME TO "star_systems";
CREATE INDEX "star_systems_id_idx" ON "star_systems"("id");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

-- CreateIndex
CREATE INDEX "spaceships_id_ownerId_idx" ON "spaceships"("id", "ownerId");
