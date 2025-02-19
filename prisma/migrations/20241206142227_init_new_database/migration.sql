-- CreateEnum
CREATE TYPE "ResponseOption" AS ENUM ('OUI', 'NON', 'INDEFINI');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('CONTRIBUTOR', 'ORGANIZER');

-- CreateEnum
CREATE TYPE "InitiativeType" AS ENUM ('ACTIONS_CLIMATIQUE', 'CONSERVATION_DE_LA_BIODIVERSITE', 'GESTION_DURABLE_DES_NUTRIMENTS', 'REDUCTION_DE_LA_POLLUTION', 'QUALITE_DE_L_AIR', 'PROTECTION_DE_DE_LA_COUCHE_D_OZONE', 'PROTECTIONS_DES_OCEANS', 'GESTION_DURABLE_DE_L_EAU', 'GESTION_DURABLE_DES_TERRITOIRES', 'EQUITE_SOCIALE_ET_EDUCATION');

-- CreateTable
CREATE TABLE "Initiative" (
    "initiativeId" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "spoken_languages" "ResponseOption" NOT NULL,
    "financial_participation" "ResponseOption" NOT NULL,
    "registration_required" "ResponseOption" NOT NULL,
    "accessibility" "ResponseOption" NOT NULL,
    "open_to_citizens" "ResponseOption" NOT NULL,
    "type" "InitiativeType" NOT NULL,
    "address" TEXT NOT NULL,
    "postcode" TEXT NOT NULL,
    "city" TEXT NOT NULL,
    "country" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "webSite" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "responsableId" INTEGER NOT NULL,
    "responsableRole" "UserRole" NOT NULL,

    CONSTRAINT "Initiative_pkey" PRIMARY KEY ("initiativeId")
);

-- CreateTable
CREATE TABLE "InitiativeLocation" (
    "initiativeLocationId" SERIAL NOT NULL,

    CONSTRAINT "InitiativeLocation_pkey" PRIMARY KEY ("initiativeLocationId")
);

-- CreateTable
CREATE TABLE "UserAccount" (
    "userAccountId" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'CONTRIBUTOR',
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "last_connect" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "UserAccount_pkey" PRIMARY KEY ("userAccountId")
);

-- CreateTable
CREATE TABLE "CompanyAccount" (
    "companyAccountId" SERIAL NOT NULL,
    "company_name" TEXT NOT NULL,
    "phone_number" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "locationId" INTEGER NOT NULL,
    "role" "UserRole" NOT NULL DEFAULT 'ORGANIZER',
    "siret" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "CompanyAccount_pkey" PRIMARY KEY ("companyAccountId")
);

-- CreateIndex
CREATE UNIQUE INDEX "Initiative_email_key" ON "Initiative"("email");

-- CreateIndex
CREATE INDEX "Initiative_type_country_open_to_citizens_idx" ON "Initiative"("type", "country", "open_to_citizens");

-- CreateIndex
CREATE UNIQUE INDEX "UserAccount_email_key" ON "UserAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAccount_email_key" ON "CompanyAccount"("email");

-- CreateIndex
CREATE UNIQUE INDEX "CompanyAccount_siret_key" ON "CompanyAccount"("siret");

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_responsableId_user_fkey" FOREIGN KEY ("responsableId") REFERENCES "UserAccount"("userAccountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_responsableId_company_fkey" FOREIGN KEY ("responsableId") REFERENCES "CompanyAccount"("companyAccountId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Initiative" ADD CONSTRAINT "Initiative_initiativeId_fkey" FOREIGN KEY ("initiativeId") REFERENCES "InitiativeLocation"("initiativeLocationId") ON DELETE RESTRICT ON UPDATE CASCADE;
