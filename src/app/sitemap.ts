import {env} from "@/lib/env";
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: env.NEXT_PUBLIC_HOST_URL,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/auth/login`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/auth/register`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/checkbot`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/history`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/plans`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/request`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/speech-to-text`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/storage`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/subscription`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/support`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/text-to-speech`,
            lastModified: new Date(),
        },
        {
            url: `${env.NEXT_PUBLIC_HOST_URL}/languageai/translate`,
            lastModified: new Date(),
        },
    ]
}