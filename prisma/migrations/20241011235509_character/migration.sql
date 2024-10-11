-- CreateTable
CREATE TABLE "characters" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "specie" TEXT NOT NULL,
    "afiliation" TEXT NOT NULL,
    "homePlanetId" TEXT NOT NULL,
    CONSTRAINT "characters_homePlanetId_fkey" FOREIGN KEY ("homePlanetId") REFERENCES "planets" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "characters_id_idx" ON "characters"("id");
