-- CreateTable
CREATE TABLE "Spaceship" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "ownerId" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "manufacturer" TEXT NOT NULL,
    CONSTRAINT "Spaceship_ownerId_fkey" FOREIGN KEY ("ownerId") REFERENCES "characters" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
