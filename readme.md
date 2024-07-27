# Prisma Project Setup and Commands

This README provides a guide to setting up and using Prisma in your project. Prisma is an ORM that helps you interact with your database easily.

## Prerequisites

Ensure you have the following installed:
- Node.js
- npm or yarn

## Installation

1. Install Prisma CLI globally (optional but recommended):
   ```bash
   npm install -g prisma



<p align="left">When you change any column values (e.g., changing the data type, renaming a column, or modifying constraints) in Prisma ORM, you need to follow a structured process to ensure that the changes are correctly reflected in your database schema and that your application remains consistent. Here’s how to handle these types of schema changes using Prisma:</p>

###

<h1 align="left">Steps to Handle Column Value Changes in Prisma ORM</h1>

###

<h3 align="left">Modify the Schema</h3>

###

<p align="left">Open your schema.prisma file and make the necessary changes to the column properties.</p>

###

<p align="left">Example: Changing the data type of a column, renaming a column, or modifying constraints.</p>

###
```
model User { 
  id        Int     @id @default(autoincrement())
  name      String  
  email     String  @unique
  age       Int     // Example: Changing this field from String to Int 
  // Rename a column<br>  // fullName String  @map("name")
```
###

## Run Migrate Command

<br><br>After modifying your schema, create a new migration with a descriptive name</p>

###

<p align="left">npx prisma migrate dev --name change_column_values</p>

###

<p align="left">This command will:<br>Create a new migration file that reflects the changes you made.<br>Apply the migration to your development database.<br>Review the generated migration files to ensure they accurately reflect your changes.<br>Update Generated Client<br><br>After running the migration, update the Prisma Client to reflect the latest schema changes:</p>

###

```bash
npx prisma generate
```

###

<h3 align="left">Handle Data Transformations (if needed)</h3>

###

<p align="left">If you are changing the data type of a column or renaming a column, you might need to write scripts to transform existing data or handle the migration of data.<br>Example: If changing a column from String to Int, you might need to convert existing string values to integers.<br>Test Your Changes<br><br>Ensure your application works correctly with the updated schema by running your tests or manually testing your application.<br>Check for any issues related to the new schema, such as data inconsistencies or application errors.<br>Prepare for Deployment<br><br>If you're deploying the changes to a production environment, ensure the migration files are included in your version control system (e.g., Git).<br>Apply Migrations in Production<br><br>When deploying, apply the migrations to your production database</p>

###

<h3 align="left">Handling Data **Type** Changes</h3>

###

<p align="left">npx prisma migrate deploy</p>

###

<p align="left">When changing the data type of a column, you must consider the following:<br><br>Data Conversion: You may need to write scripts to convert existing data to the new data type.<br>Default Values: Ensure that default values are compatible with the new data type.<br>Nullability: Check if the new data type should be nullable or not.</p>

###

<h3 align="left">Handling Column Renaming</h3>

###

- When renaming a column:
- Modify the Schema
- Use the @map attribute to rename a column</p>

###

```
model User {
  id        Int     @id @default(autoincrement())
  fullName  String  @map("name")
  }
```
###

<p align="left">Create and Apply Migration<br><br>Follow the same steps to create and apply a migration.</p>

###