﻿using System.Windows;
using System.Windows.Media;
using System.Windows.Media.Imaging;
using AlphaSkia;

namespace AlphaTab.Wpf
{
    internal static class SkImageSource
    {
        public static BitmapSource Create(AlphaSkiaImage image)
        {
            var bitmap = new WriteableBitmap(image.Width, image.Height, 96, 96, PixelFormats.Pbgra32, null);
            bitmap.Lock();
            // copy
            image.ReadPixels(bitmap.BackBuffer, (ulong)bitmap.BackBufferStride);
            bitmap.AddDirtyRect(new Int32Rect(0, 0, image.Width, image.Height));
            bitmap.Unlock();
            bitmap.Freeze();
            return bitmap;
        }
    }
}
