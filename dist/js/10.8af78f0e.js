"use strict";(self["webpackChunkproductosapi"]=self["webpackChunkproductosapi"]||[]).push([[10],{8010:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var a=r(3396),s=r(9242);const o={class:"col-md-4 offset-md-4"},n=(0,a._)("h3",{class:"text-center h3 mb-3"},"Detalles",-1),c=(0,a._)("button",{class:"btn btn-success mb-1"},"Update",-1);function l(t,e,r,l,i,u){return(0,a.wg)(),(0,a.iD)("div",o,[(0,a._)("form",{onSubmit:e[5]||(e[5]=(0,s.iM)((e=>t.handleUpdate()),["prevent"])),class:"card card-body"},[n,(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Escribe un codigo","onUpdate:modelValue":e[0]||(e[0]=e=>t.currentTask.codigo=e),class:"form-control mb-3"},null,512),[[s.nr,t.currentTask.codigo]]),(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Escribe un titulo","onUpdate:modelValue":e[1]||(e[1]=e=>t.currentTask.title=e),class:"form-control mb-3"},null,512),[[s.nr,t.currentTask.title]]),(0,a.wy)((0,a._)("textarea",{rows:"3","onUpdate:modelValue":e[2]||(e[2]=e=>t.currentTask.description=e),placeholder:"Escribe una descripción",class:"form-control mb-3"},"\n      ",512),[[s.nr,t.currentTask.description]]),(0,a.wy)((0,a._)("input",{type:"text",placeholder:"Precio","onUpdate:modelValue":e[3]||(e[3]=e=>t.currentTask.precio=e),class:"form-control mb-3"},null,512),[[s.nr,t.currentTask.precio]]),c,(0,a._)("button",{class:"btn btn-danger mb-1",onClick:e[4]||(e[4]=e=>t.handleDelete())}," Delete ")],32)])}r(7658);var i=r(4856),u=(0,a.aZ)({data(){return{currentTask:{}}},methods:{async loadTask(t){const e=await(0,i._X)(t);this.currentTask=e.data},async handleUpdate(){if("string"===typeof this.$route.params.id){const t=await(0,i.xJ)(this.$route.params.id,this.currentTask);console.log(t),this.$router.push("/")}},async handleDelete(){if("string"===typeof this.$route.params.id){const t=await(0,i._5)(this.$route.params.id);console.log(t),this.$router.push("/")}}},mounted(){"string"===typeof this.$route.params.id&&this.loadTask(this.$route.params.id)}}),d=r(89);const p=(0,d.Z)(u,[["render",l]]);var h=p}}]);
//# sourceMappingURL=10.8af78f0e.js.map