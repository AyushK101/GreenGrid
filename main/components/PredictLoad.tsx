"use client"
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { predictSchema } from '@/types/predictType'
import { 
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { z } from 'zod'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import Link from 'next/link'
import { Button } from './ui/button'
import { predictLoadType } from "@/types/predictType";
import { vettom } from '@/app/layout'


const PredictLoad = () => {
  const form= useForm({
    resolver: zodResolver(predictSchema),
    defaultValues: {
      relativeCompactNess: "",
      surfaceArea: "",
      wallArea: "",
      roofArea: "",
      overallHeight: "",
      orientation: "East",
      glazingArea: "",
      distribution: ""
    }
  })

  async function handleSubmitForm(values: predictLoadType) {
    
    console.log(values);
    
  }
  return (
    <div className={`bg-predict h-screen bg-cover flex flex-col items-center pt-3 `}>
      <h1 className='text-4xl font-bold text-earthlyBrown px-4 text-wrap text-center'>Predict Building Energy Loads</h1>
      {"  "}
      <p className='text-2xl text-earthlyBrown font-bold px-4 text-wrap text-center'>Use the form below to predict the heating and </p> 
      <p className='text-2xl text-earthlyBrown font-bold px-4 text-wrap text-center'> cooling loads of your building based on its physical features.</p>
      <Form {...form} >
        <form onSubmit={form.handleSubmit(handleSubmitForm)} className='grid grid-cols-2 gap-5 mt-4 px-4 py-3 mx-6 rounded-lg backdrop-blur-lg border border-slate-500 '>
        <FormField
          control={form.control}
          name="relativeCompactNess"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg hidden md:inline-block'>Relative Compactness</FormLabel>
              <FormLabel className='text-lg md:hidden'>Re.Comp.</FormLabel>
              <FormControl>
                <Input placeholder="relative compactness" {...field} type='number' className='text-sm '/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="surfaceArea"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Surface Area </FormLabel>
              <FormControl>
                <Input placeholder="surface area" {...field} type='number' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="wallArea"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Wall Area</FormLabel>
              <FormControl >
                <Input placeholder="wall area" {...field} type='number'  />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="roofArea"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Roof Area </FormLabel>
              <FormControl>
                <Input placeholder="roof area" {...field} type='number' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="overallHeight"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Overall Height</FormLabel>
              <FormControl>
                <Input placeholder="overall height" {...field} type='number' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* <FormField
          control={form.control}
          name="orientation"
          render={({ field }) => (
            <FormItem>
              <FormLabel className='text-lg'>Orientation</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
              <FormControl>
              <SelectTrigger>
                    <SelectValue placeholder="select orientation" />
                  </SelectTrigger>
                  <SelectContent>
                  <SelectItem value="2">North</SelectItem>
                  <SelectItem value="3">East</SelectItem>
                  <SelectItem value="4">South</SelectItem>
                  <SelectItem value="5">West</SelectItem>
                </SelectContent>
              </FormControl>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        /> */}
        <FormField
          control={form.control}
          name="orientation"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Orientation</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value} >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Orientation"  />
                  </SelectTrigger>
                </FormControl>
                <SelectContent >
                <SelectItem value="2">North</SelectItem>
                  <SelectItem value="3">East</SelectItem>
                  <SelectItem value="4">South</SelectItem>
                  <SelectItem value="5">West</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
         
        
         
         <FormField 
          control={form.control}
          name="glazingArea"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Glazing Area</FormLabel>
              <FormControl>
                <Input placeholder="glazing area" {...field} type='number' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField 
          control={form.control}
          name="distribution"
          render={({ field }) => (
            <FormItem className='place-items-center'>
              <FormLabel className='text-lg'>Distribution</FormLabel>
              <FormControl className=''>
                <Input placeholder="distribution" {...field} type='number' />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type='submit' className='col-span-2'>
          Predict
        </Button>


        </form>
      </Form> 

    </div>
  )
}

export default PredictLoad