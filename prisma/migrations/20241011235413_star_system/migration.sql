-- CreateTable
CREATE TABLE "star_systems" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateIndex
CREATE INDEX "star_systems_id_idx" ON "star_systems"("id");
