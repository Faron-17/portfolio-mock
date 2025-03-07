'use client'

import React from 'react'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { toast } from 'sonner'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from './ui/button'


const formSchema = z.object({
  name_1700633841: z.string().optional(),
  name_3315437931: z.string().min(1).optional(),
  name_4822736564: z.string().optional()
});

function ContactForm() {
  const form = useForm <z.infer <typeof formSchema >> ({
    resolver: zodResolver(formSchema)
  })

  function onSubmit(values: z.infer < typeof formSchema > ) {
    try {
      console.log(values);
      toast(
        <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
          <code className='text-white'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      );
    } catch (error) {
      console.error('Form submission error', error);
      toast.error('Failed to submit the form. Please try again.');
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 max-w-3xl mx-auto'>
        <FormField
          control={form.control}
          name='name_1700633841'
          render={({ field }) => (
            <FormItem className='mb-5'>
              <FormControl>
                <Input
                placeholder='Your name'
                type='email'
                {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name_3315437931'
          render={({ field }) => (
            <FormItem className='mb-5'>
              <FormControl>
                <Input 
                placeholder='Your website(if exists)'
                type='text'
                {...field} />
              </FormControl>
              
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='name_4822736564'
          render={({ field }) => (
            <FormItem className='mb-5'>
              <FormControl>
                <Textarea
                  placeholder='How can I help?'
                  className='resize-none h-36'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='cursor-pointer bg-black text-white font-semibold text-xl h-14 py-5'>Get In Touch</Button>
      </form>
    </Form>
  )
}

export default ContactForm