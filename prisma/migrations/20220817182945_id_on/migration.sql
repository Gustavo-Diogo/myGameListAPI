-- CreateTable
CREATE TABLE "rate" (
    "id" SERIAL NOT NULL,
    "gameId" INTEGER,
    "userID" TEXT,
    "rate" INTEGER NOT NULL,
    "comment" TEXT,

    CONSTRAINT "rate_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "rate_gameId_userID_key" ON "rate"("gameId", "userID");
