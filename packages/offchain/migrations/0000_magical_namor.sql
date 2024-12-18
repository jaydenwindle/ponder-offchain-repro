CREATE SCHEMA "offchain";
--> statement-breakpoint
CREATE TABLE "offchain"."metadata" (
	"tokenId" bigint PRIMARY KEY NOT NULL,
	"metadata" json
);
