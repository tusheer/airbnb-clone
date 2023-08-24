import { relations } from 'drizzle-orm';
import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const image = pgTable('images', {
    name: varchar('name'),
    url: text('url'),
});

export const propertyTags = pgTable('property_tags', {
    id: serial('id').primaryKey().unique(),
    name: varchar('name'),
    image: text('image'),
});

export const propertyTypes = pgTable('property_types', {
    id: serial('id').primaryKey().unique(),
    name: varchar('name'),
    image: text('image'),
});

export const properties = pgTable('users', {
    id: serial('id').primaryKey().unique(),
    name: varchar('name'),
    description: text('description'),
    location: text('location'),
    ownerName: text('owerName'),
    ownerPhone: text('owerPhone'),
    price: integer('price'),
    bed: integer('bed'),
    bath: integer('bath'),
    area: integer('area'),
    type: text('type'),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at'),
    rating: integer('rating'),
    region: text('region', {
        enum: ['all', 'europe', 'canada', 'asia', 'united_kingdom', 'united_states'],
    }).default('all'),
});

export const propertiesRelation = relations(properties, ({ many }) => {
    return {
        images: many(image),
        tags: many(propertyTags),
        types: many(propertyTypes),
    };
});
