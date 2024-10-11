-- CreateTable
CREATE TABLE "planets" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "climate" TEXT NOT NULL,
    "terrain" TEXT NOT NULL,
    "population" INTEGER NOT NULL,
    "starSystemId" TEXT NOT NULL,
    CONSTRAINT "planets_starSystemId_fkey" FOREIGN KEY ("starSystemId") REFERENCES "star_systems" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE INDEX "planets_id_idx" ON "planets"("id");
