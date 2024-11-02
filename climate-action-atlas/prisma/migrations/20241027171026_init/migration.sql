-- CreateEnum
CREATE TYPE "ResponseOption" AS ENUM ('OUI', 'NON', 'INDEFINI');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'REPORTER', 'ORGANIZER');

-- CreateTable
CREATE TABLE "Initiative" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "location" INTEGER NOT NULL,
    "spoken_languages" "ResponseOption" NOT NULL,
    "financial_participation" "ResponseOption" NOT NULL,
    "registration_required" "ResponseOption" NOT NULL,
    "accessibility" "ResponseOption" NOT NULL,
    "open_to_citizens" "ResponseOption" NOT NULL,
    "type" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "reporter_id" INTEGER NOT NULL,
    "organizer_id" INTEGER NOT NULL,

    CONSTRAINT "Initiative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Location" (
    "id" SERIAL NOT NULL,
    "initiativeId" INTEGER NOT NULL,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Location_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserAccount" (
    "id" SERIAL NOT NULL,
    "user_account_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'REPORTER',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_connect" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CompanyAccount" (
    "id" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'ORGANIZER',
    "siret" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyAccount_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Initiative_email_key" ON "Initiative"("email");

-- CreateIndex
CREATE INDEX "Initiative_type_location_spoken_languages_open_to_citizens_idx" ON "Initiative"("type", "location", "spoken_languages", "open_to_citizens");

-- CreateIndex
CREATE INDEX "Location_longitude_idx" ON "Location"("longitude");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_email_key" ON "UserAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAccount_email_key" ON "CompanyAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAccount_siret_key" ON "CompanyAccount"("siret");

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_reporter_id_fkey" FOREIGN KEY ("reporter_id") REFERENCES "UserAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_organizer_id_fkey" FOREIGN KEY ("organizer_id") REFERENCES "CompanyAccount"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Location" ADD CONSTRAINT "Location_initiativeId_fkey" FOREIGN KEY ("initiativeId") REFERENCES "Initiative"("id") ON DELETE CASCADE ON UPDATE CASCADE;
