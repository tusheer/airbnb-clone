import { relations } from 'drizzle-orm';
import {
    boolean,
    integer,
    json,
    pgTable,
    primaryKey,
    real,
    serial,
    text,
    timestamp,
    varchar,
} from 'drizzle-orm/pg-core';

export const propertyTags = pgTable('property_tags', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    image: text('image').notNull(),
});

export const propertyTagsRelations = relations(propertyTags, ({ many }) => {
    return {
        tagsToProperties: many(tagsToProperties),
    };
});

export const properties = pgTable('properties', {
    id: serial('id').primaryKey(),
    name: varchar('name').notNull(),
    description: text('description').notNull(),
    location: text('location').notNull(),
    ownerName: text('owerName').notNull(),
    ownerPhone: text('owerPhone').notNull(),
    price: integer('price'),
    bed: integer('bed').notNull(),
    bath: integer('bath').notNull(),
    area: integer('area').notNull(),
    created_at: timestamp('created_at').defaultNow(),
    updated_at: timestamp('updated_at'),
    rating: real('rating'),
    region: text('region', {
        enum: ['europe', 'canada', 'asia', 'united_kingdom', 'united_states'],
    }).default('united_states'),
    types: text('types', {
        enum: ['house', 'apartment', 'guesthouse', 'hotel'],
    }).default('house'),
    images: json('images').$type<{ url: string }[]>().default([]),
    placeType: text('placeType', {
        enum: ['room', 'entire_home'],
    }).default('room'),
    vat: boolean('vat').default(false),
});

export const propertiesRelations = relations(properties, ({ many }) => ({
    tagsToProperties: many(tagsToProperties),
}));

export const tagsToProperties = pgTable(
    'tags_to_properties',
    {
        propertyId: integer('propertyId')
            .notNull()
            .references(() => properties.id),
        tagId: integer('tagId')
            .notNull()
            .references(() => propertyTags.id),
    },
    (t) => ({
        pk: primaryKey(t.propertyId, t.tagId),
    })
);

export const tagsTopropertiesRelations = relations(tagsToProperties, ({ one }) => ({
    properties: one(properties, {
        fields: [tagsToProperties.propertyId],
        references: [properties.id],
    }),
    images: one(propertyTags, {
        fields: [tagsToProperties.tagId],
        references: [propertyTags.id],
    }),
}));
