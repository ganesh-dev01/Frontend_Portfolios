-- CreateTable
CREATE TABLE "Task" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deadline" DATETIME NOT NULL,
    "isDone" BOOLEAN NOT NULL DEFAULT false,
    "user_email" TEXT NOT NULL,
    CONSTRAINT "Task_user_email_fkey" FOREIGN KEY ("user_email") REFERENCES "User" ("email") ON DELETE CASCADE ON UPDATE CASCADE
);
