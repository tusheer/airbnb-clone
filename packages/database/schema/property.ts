import { relations } from 'drizzle-orm';
import { integer, pgTable, primaryKey, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';

export const images = pgTable('images', {
    id: serial('id').primaryKey(),
    name: varchar('name'),
    url: text('url'),
});

export const imageRelations = relations(images, ({ many }) => {
    return {
        imageToProperties: many(imageToProperties),
    };
});

export const propertyTags = pgTable('property_tags', {
    id: serial('id').primaryKey(),
    name: varchar('name'),
    image: text('image'),
});

export const propertyTagsRelations = relations(propertyTags, ({ many }) => {
    return {
        tagsToProperties: many(tagsToProperties),
    };
});

export const propertyTypes = pgTable('property_types', {
    id: serial('id').primaryKey(),
    name: varchar('name'),
    image: text('image'),
});

export const propertyTypesRelations = relations(propertyTypes, ({ many }) => {
    return {
        typesToProperties: many(typesToProperties),
    };
});

export const properties = pgTable('properties', {
    id: serial('id').primaryKey(),
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

export const propertiesRelations = relations(properties, ({ many }) => {
    return {
        images: many(imageToProperties),
        tags: many(tagsToProperties),
        types: many(typesToProperties),
    };
});

export const typesToProperties = pgTable(
    'types_to_properties',
    {
        propertyId: integer('propertyId')
            .notNull()
            .references(() => properties.id),
        typeId: integer('typeId')
            .notNull()
            .references(() => propertyTypes.id),
    },
    (t) => ({
        pk: primaryKey(t.propertyId, t.typeId),
    })
);

export const typesTopropertiesRelations = relations(typesToProperties, ({ one }) => ({
    properties: one(properties, {
        fields: [typesToProperties.propertyId],
        references: [properties.id],
    }),
    images: one(propertyTypes, {
        fields: [typesToProperties.typeId],
        references: [propertyTypes.id],
    }),
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

export const imageToProperties = pgTable(
    'images_to_properties',
    {
        propertyId: integer('propertyId')
            .notNull()
            .references(() => properties.id),
        imageId: integer('imageId')
            .notNull()
            .references(() => images.id),
    },
    (t) => ({
        pk: primaryKey(t.propertyId, t.imageId),
    })
);

export const imageTopropertiesRelations = relations(imageToProperties, ({ one }) => ({
    properties: one(properties, {
        fields: [imageToProperties.propertyId],
        references: [properties.id],
    }),
    images: one(images, {
        fields: [imageToProperties.imageId],
        references: [images.id],
    }),
}));
